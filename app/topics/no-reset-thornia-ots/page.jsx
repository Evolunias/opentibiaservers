import NoResetThorniaOtsKeywordPage, { generateMetadata } from './no-reset-thornia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThorniaOtsKeywordPage />;
}
