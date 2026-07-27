import ImperianicOtServerKeywordPage, { generateMetadata } from './imperianic-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicOtServerKeywordPage />;
}
