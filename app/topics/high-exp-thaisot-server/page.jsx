import HighExpThaisotServerKeywordPage, { generateMetadata } from './high-exp-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpThaisotServerKeywordPage />;
}
