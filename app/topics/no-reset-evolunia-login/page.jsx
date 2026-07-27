import NoResetEvoluniaLoginKeywordPage, { generateMetadata } from './no-reset-evolunia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEvoluniaLoginKeywordPage />;
}
