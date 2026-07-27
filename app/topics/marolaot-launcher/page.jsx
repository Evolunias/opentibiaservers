import MarolaotLauncherKeywordPage, { generateMetadata } from './marolaot-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotLauncherKeywordPage />;
}
