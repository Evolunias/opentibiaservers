import ActiveElderaOtServerKeywordPage, { generateMetadata } from './active-eldera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveElderaOtServerKeywordPage />;
}
