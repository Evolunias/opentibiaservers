import MarolaotLaunchKeywordPage, { generateMetadata } from './marolaot-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotLaunchKeywordPage />;
}
