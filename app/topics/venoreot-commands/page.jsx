import VenoreotCommandsKeywordPage, { generateMetadata } from './venoreot-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotCommandsKeywordPage />;
}
