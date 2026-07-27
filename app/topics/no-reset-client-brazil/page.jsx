import NoResetClientBrazilKeywordPage, { generateMetadata } from './no-reset-client-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClientBrazilKeywordPage />;
}
