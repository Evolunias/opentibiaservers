import ActiveTibiantisOtServerKeywordPage, { generateMetadata } from './active-tibiantis-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiantisOtServerKeywordPage />;
}
