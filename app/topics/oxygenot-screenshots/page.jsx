import OxygenotScreenshotsKeywordPage, { generateMetadata } from './oxygenot-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotScreenshotsKeywordPage />;
}
