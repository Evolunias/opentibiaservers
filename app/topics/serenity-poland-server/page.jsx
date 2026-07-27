import SerenityPolandServerKeywordPage, { generateMetadata } from './serenity-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityPolandServerKeywordPage />;
}
