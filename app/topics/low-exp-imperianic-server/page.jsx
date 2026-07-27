import LowExpImperianicServerKeywordPage, { generateMetadata } from './low-exp-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpImperianicServerKeywordPage />;
}
