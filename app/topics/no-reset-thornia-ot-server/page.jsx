import NoResetThorniaOtServerKeywordPage, { generateMetadata } from './no-reset-thornia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThorniaOtServerKeywordPage />;
}
