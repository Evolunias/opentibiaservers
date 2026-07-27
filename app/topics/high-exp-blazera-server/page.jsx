import HighExpBlazeraServerKeywordPage, { generateMetadata } from './high-exp-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpBlazeraServerKeywordPage />;
}
