import LowExpEvoluniaServerKeywordPage, { generateMetadata } from './low-exp-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpEvoluniaServerKeywordPage />;
}
