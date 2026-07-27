import TopEvoluniaKeywordPage, { generateMetadata } from './top-evolunia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoluniaKeywordPage />;
}
