import ActiveAureraGlobalOtKeywordPage, { generateMetadata } from './active-aurera-global-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAureraGlobalOtKeywordPage />;
}
