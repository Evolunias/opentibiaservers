import ActiveZuneraOtServerKeywordPage, { generateMetadata } from './active-zunera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveZuneraOtServerKeywordPage />;
}
