import NoResetEvoluniaClientKeywordPage, { generateMetadata } from './no-reset-evolunia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEvoluniaClientKeywordPage />;
}
