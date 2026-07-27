import SabrehavenLauncherKeywordPage, { generateMetadata } from './sabrehaven-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenLauncherKeywordPage />;
}
