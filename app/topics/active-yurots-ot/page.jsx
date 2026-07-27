import ActiveYurotsOtKeywordPage, { generateMetadata } from './active-yurots-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveYurotsOtKeywordPage />;
}
