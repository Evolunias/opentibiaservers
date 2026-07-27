import LowrateEvoluniaClientKeywordPage, { generateMetadata } from './lowrate-evolunia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoluniaClientKeywordPage />;
}
