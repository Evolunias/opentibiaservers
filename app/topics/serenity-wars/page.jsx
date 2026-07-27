import SerenityWarsKeywordPage, { generateMetadata } from './serenity-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityWarsKeywordPage />;
}
