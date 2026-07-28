import NtoShinobiTalesPage, { generateMetadata } from './nto-shinobi-tales';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoShinobiTalesPage />;
}
