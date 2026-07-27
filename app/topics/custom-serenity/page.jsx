import CustomSerenityKeywordPage, { generateMetadata } from './custom-serenity';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSerenityKeywordPage />;
}
