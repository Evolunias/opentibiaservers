import LowrateEvoluniaLoginKeywordPage, { generateMetadata } from './lowrate-evolunia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoluniaLoginKeywordPage />;
}
