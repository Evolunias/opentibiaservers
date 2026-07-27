import HighExpClassicusServerKeywordPage, { generateMetadata } from './high-exp-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpClassicusServerKeywordPage />;
}
