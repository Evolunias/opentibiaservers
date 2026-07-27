import CustomSerenityServerKeywordPage, { generateMetadata } from './custom-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSerenityServerKeywordPage />;
}
