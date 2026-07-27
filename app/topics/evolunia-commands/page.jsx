import EvoluniaCommandsKeywordPage, { generateMetadata } from './evolunia-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaCommandsKeywordPage />;
}
