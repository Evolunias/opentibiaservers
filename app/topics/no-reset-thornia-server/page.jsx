import NoResetThorniaServerKeywordPage, { generateMetadata } from './no-reset-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThorniaServerKeywordPage />;
}
