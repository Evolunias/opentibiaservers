import CustomSerenityClientKeywordPage, { generateMetadata } from './custom-serenity-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSerenityClientKeywordPage />;
}
