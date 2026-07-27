import RubinotCommandsKeywordPage, { generateMetadata } from './rubinot-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotCommandsKeywordPage />;
}
