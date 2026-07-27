import HighExpEvoluniaServerKeywordPage, { generateMetadata } from './high-exp-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpEvoluniaServerKeywordPage />;
}
