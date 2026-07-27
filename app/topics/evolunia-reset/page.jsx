import EvoluniaResetKeywordPage, { generateMetadata } from './evolunia-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaResetKeywordPage />;
}
