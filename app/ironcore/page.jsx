import IroncorePage, { generateMetadata } from './ironcore';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IroncorePage />;
}
