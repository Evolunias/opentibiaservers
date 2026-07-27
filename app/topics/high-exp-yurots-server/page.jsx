import HighExpYurotsServerKeywordPage, { generateMetadata } from './high-exp-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpYurotsServerKeywordPage />;
}
