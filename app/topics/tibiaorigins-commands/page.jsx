import TibiaoriginsCommandsKeywordPage, { generateMetadata } from './tibiaorigins-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsCommandsKeywordPage />;
}
