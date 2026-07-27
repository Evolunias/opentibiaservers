import ActiveAureraGlobalLoginKeywordPage, { generateMetadata } from './active-aurera-global-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAureraGlobalLoginKeywordPage />;
}
