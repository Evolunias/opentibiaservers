import NoResetThorniaLoginKeywordPage, { generateMetadata } from './no-reset-thornia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThorniaLoginKeywordPage />;
}
