import CustomSerenityLoginKeywordPage, { generateMetadata } from './custom-serenity-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSerenityLoginKeywordPage />;
}
