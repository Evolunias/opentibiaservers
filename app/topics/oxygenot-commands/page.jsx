import OxygenotCommandsKeywordPage, { generateMetadata } from './oxygenot-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotCommandsKeywordPage />;
}
