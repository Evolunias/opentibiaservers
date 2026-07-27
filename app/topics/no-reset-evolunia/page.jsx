import NoResetEvoluniaKeywordPage, { generateMetadata } from './no-reset-evolunia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEvoluniaKeywordPage />;
}
