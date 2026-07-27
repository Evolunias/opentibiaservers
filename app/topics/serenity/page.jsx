import SerenityKeywordPage, { generateMetadata } from './serenity';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityKeywordPage />;
}
