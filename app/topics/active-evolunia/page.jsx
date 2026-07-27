import ActiveEvoluniaKeywordPage, { generateMetadata } from './active-evolunia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoluniaKeywordPage />;
}
