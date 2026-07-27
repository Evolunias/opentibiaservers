import HighExpImperianicServerKeywordPage, { generateMetadata } from './high-exp-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpImperianicServerKeywordPage />;
}
