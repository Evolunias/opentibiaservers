import ActiveClassicusOtServerKeywordPage, { generateMetadata } from './active-classicus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassicusOtServerKeywordPage />;
}
