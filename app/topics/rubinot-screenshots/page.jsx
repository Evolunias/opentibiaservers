import RubinotScreenshotsKeywordPage, { generateMetadata } from './rubinot-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotScreenshotsKeywordPage />;
}
