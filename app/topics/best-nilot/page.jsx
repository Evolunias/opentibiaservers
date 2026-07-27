import BestNilotKeywordPage, { generateMetadata } from './best-nilot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNilotKeywordPage />;
}
