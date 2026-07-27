import ActiveEvoluniaClientKeywordPage, { generateMetadata } from './active-evolunia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoluniaClientKeywordPage />;
}
