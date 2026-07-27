import ActiveCarlinotOtKeywordPage, { generateMetadata } from './active-carlinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCarlinotOtKeywordPage />;
}
