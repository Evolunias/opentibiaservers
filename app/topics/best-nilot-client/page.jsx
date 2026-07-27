import BestNilotClientKeywordPage, { generateMetadata } from './best-nilot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNilotClientKeywordPage />;
}
