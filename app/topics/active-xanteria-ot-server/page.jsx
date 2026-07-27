import ActiveXanteriaOtServerKeywordPage, { generateMetadata } from './active-xanteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveXanteriaOtServerKeywordPage />;
}
